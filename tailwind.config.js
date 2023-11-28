/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FAE3B6",
        secondary: "#FDBB57",
        recColor: "#FEECC8",
        SellerColor: "#CFA485",
        noteColor: "#CFA485",
        prixColor: "#C4C4C4",
        btnBdrClr: "#FFD687",
        btnTxtClr: "#050505",
      },
      maxWidth: {
        navCon: '1320px',
        bnrCon: '1272px',
        itmCon: '1276px',
        pjcCon: '1330px',
        abtCon: '1330px',
        
      },
      width: {
        bnrTW: '556px',
        pjcIW: '660px',
        pjcTW: '427px',
        abtItmF: '457px',
        cardW: '366px',
      },
      fontSize: {
        mainHading: "64px",
        praText: "22px",
        counterText: "28px",
      },
      fontFamily: {
        pop: ["Poppins"],
        frank: ["Frank Ruhl Libre"],
        Podkova: ["Podkova"],
      },
      borderRadius: {
        roundedX: '10px',
        itmBtn: '20px',
        bnrB: '0 0 20px 20px',
        cardT: "60px 60px 0px 0px"
      },
      boxShadow: {
        btnShd: '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 4px 4px 4px 0px #F2D09B inset',
      },
      padding: {
        bnrT: '123px',
        bnrB: '133px',
        btnBnr: '133px',
        txtBnrT: '38px',
        txtbtnB: '76px',
        itmT: '217px',
        itmB: '127px',
        itmBtnX: '100px',
        itmBtnY: '9px',
        pjcT: '88px',
        pjtCdY: '71px',
        pjtCdL: '77px',
        pjtCdR: '42px',
        pjtB: '335px',
        abtB: '191px',
        abtBtnY: '24px',
        abtBtnX: '86px',
      
      },
      gap: {
        pjtG: '124px',
     
      },
      spacing: {
        cdR: '-120px',
        txtPR: "27px",
        txtPA: "-27px",
        tPMT: "60px",
        pDB:"-350px",
        pDL:"200px",
        pDST:"-48px",
        pDSR:"-90px",
      }
    },
  },
  plugins: [],
};
