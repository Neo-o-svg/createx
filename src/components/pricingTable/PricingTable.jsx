import React from "react";

export default function PricingTable() {
  return (
    <section className="pricing">
      <div className="pricing-top default-top">
        <div className="container">
          <span className="h2">Pricing</span>
          <p>We offer you three categories of construction.</p>
        </div>
      </div>

      <div className="pricing__bottom">
        <div className="container">
          <table className="pricing__table">
            <thead>
              <tr>
                <th className="th-min">Items</th>
                <th className="th-big">
                  BASIC
                  <br />
                  <span>$20 per m²</span>
                </th>
                <th className="th-big">
                  STANDARD
                  <br />
                  <span>$30 per m²</span>
                </th>
                <th className="th-big">
                  BUSINESS
                  <br />
                  <span>$40 per m²</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Installation plan</td>
                <td>
                  <span className="check-mark"></span>
                </td>
                <td>
                  <span className="check-mark"></span>
                </td>
                <td>
                  <span className="check-mark"></span>
                </td>
              </tr>
              <tr>
                <td>Planning solutions (2–3 options)</td>
                <td>
                  <span className="check-mark"></span>
                </td>
                <td>
                  <span className="check-mark"></span>
                </td>
                <td>
                  <span className="check-mark"></span>
                </td>
              </tr>
              <tr>
                <td>Lighting plan</td>
                <td>
                  <span className="check-mark"></span>
                </td>
                <td>
                  <span className="check-mark"></span>
                </td>
                <td>
                  <span className="check-mark"></span>
                </td>
              </tr>
              <tr>
                <td>Flooring plan</td>
                <td>
                  <span className="check-mark"></span>
                </td>
                <td>
                  <span className="check-mark"></span>
                </td>
                <td>
                  <span className="check-mark"></span>
                </td>
              </tr>
              <tr>
                <td>Heating floor laying scheme</td>
                <td>
                  <span className="check-mark"></span>
                </td>
                <td>
                  <span className="check-mark"></span>
                </td>
                <td>
                  <span className="check-mark"></span>
                </td>
              </tr>
              <tr>
                <td>Air conditioner zones layout</td>
                <td>
                  <span className="check-mark"></span>
                </td>
                <td>
                  <span className="check-mark"></span>
                </td>
                <td>
                  <span className="check-mark"></span>
                </td>
              </tr>
              <tr>
                <td>3D visualization of all rooms</td>
                <td>simplified</td>
                <td>
                  <span className="check-mark"></span>
                </td>
                <td>
                  <span className="check-mark"></span>
                </td>
              </tr>
              <tr>
                <td>Visualization of each room (3–4 angles)</td>
                <td>
                  <span className="check-mark-none"></span>
                </td>
                <td>
                  <span className="check-mark-none"></span>
                </td>
                <td>
                  <span className="check-mark"></span>
                </td>
              </tr>
              <tr>
                <td>Terms</td>
                <td>10 days</td>
                <td>20 days</td>
                <td>30 days</td>
              </tr>
              <tr className="btn-row">
                <td></td>
                <td>
                  <button className="btn outline">Send Request</button>
                </td>
                <td>
                  <button className="btn outline">Send Request</button>
                </td>
                <td>
                  <button className="btn outline">Send Request</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
