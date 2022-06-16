import { ORIGIN } from "../config";
import axios from "axios";

export default axios.create({

    baseURL: ORIGIN
})