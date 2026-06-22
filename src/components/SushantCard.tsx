export default function SushantCard() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "30px auto",
        padding: "30px",
        borderRadius: "20px",
        background: "#ffffff",
        boxShadow: "0 0 20px rgba(0,0,0,0.15)",
        textAlign: "center",
        fontFamily: "Arial"
      }}
    >
      <img
        src="/logo.png"
        alt="Logo"
        style={{
          width: "150px",
          marginBottom: "20px"
        }}
      />

      <h1>Sushant Sharma</h1>
      <h2>CEO & Founder</h2>

      <p>📞 +91 92207 56669</p>
      <p>📧 ceo@bharatgreencarbon.com</p>
      <p>
        📍 33/1, DSIIDC Industrial Complex, Jhilmil Industrial Area,
        Delhi-110095
      </p>
      <p>🌐 www.bharatgreencarbon.com</p>

      <br />

      <a href="tel:+919220756669">
        <button
          style={{
            padding: "12px 25px",
            margin: "10px",
            background: "#0b6e4f",
            color: "white",
            border: "none",
            borderRadius: "10px"
          }}
        >
          Call
        </button>
      </a>

      <a href="https://wa.me/919220756669">
        <button
          style={{
            padding: "12px 25px",
            margin: "10px",
            background: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "10px"
          }}
        >
          WhatsApp
        </button>
      </a>

      <br />

      <a href="/SushantSharma.vcf" download>
        <button
          style={{
            padding: "12px 25px",
            marginTop: "20px",
            background: "#d4af37",
            color: "white",
            border: "none",
            borderRadius: "10px"
          }}
        >
          Save Contact
        </button>
      </a>
    </div>
  );
}
