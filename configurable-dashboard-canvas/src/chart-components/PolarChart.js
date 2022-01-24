import { html, LitElement } from "lit";
import "@vaadin/charts";

export class PolarChart extends LitElement {
  render() {
    return html` <link rel="stylesheet" href="./chart.css" />
      <vaadin-chart
        title="Polar Chart"
        polar
        additional-options='{
      "xAxis": {
        "tickInterval": 45,
        "min": 0,
        "max": 360,
        "labels": {}
      },
      "yAxis": {
        "min":0
      },
      "plotOptions": {
        "series": {
          "pointStart": 0,
          "pointInterval":45
        },
        "column": {
          "pointPadding": 0,
          "groupPadding": 0
        }
      }
    }'
      >
        <vaadin-chart-series
          type="column"
          title="Column"
          values="[8, 7, 6, 5, 4, 3, 2, 1]"
          additional-options='{
        "pointPlacement": "between"
      }'
        ></vaadin-chart-series>
        <vaadin-chart-series
          type="line"
          title="Line"
          values="[1, 2, 3, 4, 5, 6, 7, 8]"
        >
        </vaadin-chart-series>
        <vaadin-chart-series
          type="area"
          title="Area"
          values="[1, 8, 2, 7, 3, 6, 4, 5]"
        >
        </vaadin-chart-series>
      </vaadin-chart>`;
  }
}

window.customElements.define("polar-chart", PolarChart);