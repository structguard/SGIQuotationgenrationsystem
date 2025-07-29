
import React, { useState } from "react";
import comlogo from '../Images/companylogo.jpg'
import smallmultiimg from '../Images/blocksnewimg/20-25pergectshape.png'
import bigmultiimg from '../Images/blocksnewimg/multibgremove.png'
import round25 from '../Images/blocksnewimg/round25mm.png'
import round40 from '../Images/blocksnewimg/round40mm.png'
import footing50 from '../Images/blocksnewimg/footing50mm-removebg-preview.png'
import pdf from '../Images/blocksnewimg/plaindoorframe.png'
import mdf from '../Images/blocksnewimg/maharajadoorframe.png'



const products = [
    { id: 1, name: "20-25", image: smallmultiimg },
    { id: 2, name: "20,25,40,50", image: bigmultiimg },
    { id: 3, name: "Round 25", image: round25 },
    { id: 4, name: "Round 40", image: round40 },
    { id: 5, name: "50 Footing", image: footing50 },
    { id: 6, name: "Plain Door Frame", image: pdf },
    { id: 7, name: "maharaja Door Frame", image: mdf },
];

const QuotationScreen = () => {
    const [clientCompany, setClientCompany] = useState("");

    const [productData, setProductData] = useState(
        products.map((product) => ({
            ...product,
            quantity: 0,
            rate: 0,
            gst: 0,
        }))
    );

    const handleChange = (id, field, value) => {
        const updated = productData.map((item) =>
            item.id === id ? { ...item, [field]: Number(value) } : item
        );
        setProductData(updated);
    };

    const calculateTotal = (product) => {
        const gstPerUnit = product.rate * 1.18;
        return gstPerUnit * product.quantity;
    };


    const grandTotal = productData.reduce((acc, curr) => acc + calculateTotal(curr), 0);

    const currentDate = new Date().toLocaleDateString();

    return (
        <div style={styles.container}>
            {/* Header */}
            <div style={styles.header}>
                <img src={comlogo} alt="Logo" style={styles.logo} />

                <div style={styles.headerRight}>
                    <p style={styles.date}>Date: {currentDate}</p>
                    <h2 style={styles.companyName}>Structguard Infra Products & Services LLP</h2>

                    <div style={styles.addressBlock}>
                        <p><strong>Office:</strong> 418, Platinum 9, Pashan-Sus Road, Behind Audi showroom, Baner, Pune, MH-411045</p>
                        <p><strong>Factory:</strong> Sr. No 715, Satvwadi, Lavale, Mulshi, Pune, MH-412115</p>
                        <p><strong>Mob:</strong> +91 8956134732 / +91 8956134733</p>
                        <p><strong>Email:</strong> structguardinfrapro@gmail.com</p>
                        <p><strong>Website:</strong> www.structguardinfra.com</p>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: "15px" }}>
                <label style={{ fontWeight: "bold", marginRight: "10px" }}>Quotation For:</label>
                <input
                    type="text"
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    placeholder="Enter Client Company Name"
                    style={{
                        padding: "6px 10px",
                        width: "300px",
                        fontSize: "14px",
                    }}
                />
            </div>



            {/* Product Table */}
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Sr.no</th>
                        <th style={styles.th}>Product</th>
                        <th style={styles.th}>Image</th>
                        <th style={styles.th}>Qty</th>
                        <th style={styles.th}>Rate/Unit</th>
                        <th style={styles.th}>GST</th>
                        <th style={styles.th}>GST+Per Unit</th>
                        <th style={styles.th}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((product, index) => (
                        <tr key={product.id}>
                            <td style={styles.td}>{index + 1}</td>
                            <td style={styles.td}>{product.name}</td>
                            <td style={styles.td}>
                                <img src={product.image} alt={product.name} style={styles.tableImage} />
                            </td>
                            <td style={styles.td}>
                                <input
                                    type="number"
                                    value={product.quantity || ""}
                                    onChange={(e) =>
                                        handleChange(product.id, "quantity", e.target.value === "" ? 0 : e.target.value)
                                    }
                                    style={styles.input}
                                />
                            </td>


                            <td style={styles.td}>
                                <input
                                    type="number"
                                    value={product.rate || ""}
                                    onChange={(e) =>
                                        handleChange(product.id, "rate", e.target.value === "" ? 0 : e.target.value)
                                    }
                                    style={styles.input}
                                />
                            </td>

                            <td style={styles.td}>
                                ₹{(product.rate * 1.18).toFixed(2)}
                            </td>


                            {/* 
                            <td style={styles.td}>
                                <input
                                    type="number"
                                    value={product.gst || ""}
                                    onChange={(e) =>
                                        handleChange(product.id, "gst", e.target.value === "" ? 0 : e.target.value)
                                    }
                                    style={styles.input}
                                />
                            </td> */}

                            <td style={styles.td}>
                                ₹{calculateTotal(product).toFixed(2)}
                            </td>
                            <td style={styles.td}>₹{calculateTotal(product).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            {/* Grand Total */}
            <div style={styles.total}>
                <h3>Grand Total: ₹{grandTotal.toFixed(2)}</h3>
            </div>

            {/* Rules */}
            <div style={styles.rules}>
                <h4>Quotation Rules</h4>
                <ul>
                    <li>Quotation is valid for 7 days only.</li>
                    <li>Delivery will be Deliverd 2-3 days from the order issued for each Quotation</li>
                    <li>Transport not included.</li>
                    <li>We are looking forward to a long and grateful partnership with your esteemed Organization.</li>
                </ul>
            </div>
        </div>
    );
};

// CSS Styles
const styles = {
    // ... (keep existing styles above)
    container: {
        maxWidth: "900px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial",
        fontSize: "14px",
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "2px solid #000",
        paddingBottom: "10px",
        marginBottom: "10px",
    },
    logo: {
        width: "80px",
        height: "80px",
    },
    quotationHeader: {
        marginBottom: "20px",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
    },
    tableImage: {
        width: "50px",
        height: "50px",
    },
    input: {
        width: "60px",
    },
    total: {
        textAlign: "right",
        fontWeight: "bold",
        fontSize: "18px",
        marginTop: "10px",
    },
    rules: {
        marginTop: "30px",
        background: "#f9f9f9",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",  // important for clean borders
        marginBottom: "20px",
    },
    tableImage: {
        width: "50px",
        height: "50px",
    },
    input: {
        width: "60px",
    },
    total: {
        textAlign: "right",
        fontWeight: "bold",
        fontSize: "18px",
        marginTop: "10px",
    },
    rules: {
        marginTop: "30px",
        background: "#f9f9f9",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
    },

    // ✅ Add these new styles for table lines
    th: {
        border: "1px solid #333",
        padding: "8px",
        background: "#fe6501",
        textAlign: "center",

        height: 60
    },
    td: {
        border: "1px solid #333",
        padding: "8px",
    },

    header: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderBottom: "2px solid #000",
        paddingBottom: "10px",
        marginBottom: "20px",
        gap: "20px",
    },

    logo: {
        width: "80px",
        height: "80px",
        objectFit: "contain",
    },

    headerRight: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flex: 1,
        fontSize: "14px",
    },

    date: {
        margin: 0,
        fontSize: "14px",
        color: "#555",
    },

    companyName: {
        margin: "5px 0",
        fontSize: "20px",
        fontWeight: "bold",
    },

    addressBlock: {
        lineHeight: "1.4",
        marginTop: "8px",
        fontSize: "13px",
        color: "#333",
    },




};


export default QuotationScreen;
