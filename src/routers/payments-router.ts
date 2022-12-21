import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { createTicketType, getPaymentByTicketId, paymentProcess } from "@/controllers";

const paymentsRouter = Router();

paymentsRouter
  .all("/*", authenticateToken)
  .get("/", getPaymentByTicketId)
  .post("/process", paymentProcess)
  .post("/", createTicketType);

export { paymentsRouter };
