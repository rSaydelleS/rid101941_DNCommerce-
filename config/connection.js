import { connect } from "mongoose";

let conn;

const connection = async (req = null, res = null, next = null) => {
  try {
    if (conn) {
      return conn;
    }
    conn = await connect(process.env.LOCALMONGOURI);
    console.log("conecatado ao banco de dados no cluster DNCEcommerce");
  } catch (error) {}
};

export default connection;