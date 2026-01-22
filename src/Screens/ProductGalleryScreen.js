import React from "react";
import comlogo from '../Images/companylogo.jpg';
import { products } from './QuotationScreen'; // import product array

const ProductGalleryScreen = () => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <div style={styles.container}>
            {/* Header (same as QuotationScreen) */}
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

            {/* Image Gallery */}
            <div style={styles.gallery}>
                {products.map((product) => (
                    <div key={product.id} style={styles.imageWrapper}>
                        <img src={product.image} alt={product.name} style={styles.bigImage} />
                        <p style={styles.imageName}>{product.name}</p>
                    </div>
                ))}
            </div>

            {/* Rules (same as QuotationScreen) */}
            <div style={styles.rules}>
                <h4>Quotation Rules</h4>
                <ul>
                    <li>Quotation is valid for 7 days only.</li>
                    <li>Delivery will be delivered 2-3 days from the order issued for each Quotation</li>
                    <li>Transport not included.</li>
                    <li>We are looking forward to a long and grateful partnership with your esteemed Organization.</li>
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "900px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial",
        fontSize: "14px",
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
    gallery: {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        marginBottom: "30px",
    },
    imageWrapper: {
        textAlign: "center",
        width: "200px",
    },
    bigImage: {
        width: "100%",
        height: "auto",
        borderRadius: "10px",
        objectFit: "contain",
    },
    imageName: {
        marginTop: "8px",
        fontWeight: "bold",
    },
    rules: {
        marginTop: "30px",
        background: "#f9f9f9",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
    },
};

export default ProductGalleryScreen;
