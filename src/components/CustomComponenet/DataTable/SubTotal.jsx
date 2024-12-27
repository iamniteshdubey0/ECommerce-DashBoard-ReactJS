import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const TAX_RATE = 0.18;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)", 2, 50),
  createRow("Paper (Case)", 10, 5),
  createRow("Waste Basket", 2, 100),
];

const invoiceSubtotal = subtotal(rows);
const invoiceDiscount = 0.1 * invoiceSubtotal;
const invoiceNewTotal = invoiceSubtotal - invoiceDiscount;
const invoiceTaxes = TAX_RATE * invoiceNewTotal;
const shippingCharge = 40;
const invoiceTotal = invoiceTaxes + shippingCharge + invoiceNewTotal;

export default function SubTotal() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: "100%" }} aria-label="spanning table" size="small">
        <TableHead></TableHead>
        <TableBody>
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>Discount</TableCell>
            <TableCell align="right">{ccyFormat(invoiceDiscount)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GST</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Shipping</TableCell>
            <TableCell align="right">{ccyFormat(shippingCharge)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
