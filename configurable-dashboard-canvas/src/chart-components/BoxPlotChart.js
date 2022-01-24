import { html, LitElement } from "lit";
import "@vaadin/charts";

export class BoxPlotChart extends LitElement {
  render() {
    return html` <link rel="stylesheet" href="./chart.css" />
      <vaadin-chart
        type="boxplot"
        style="height: 90%; width: 100%;"
        title="Box Plot Example"
        categories='["1", "2", "3", "4", "5"]'
        no-legend
        tooltip
        additional-options='{
      "xAxis": {
        "title": {
          "text": "Experiment No."
        }
      },
      "yAxis": {
        "title": {
          "text": "Observations"
        },
        "plotLines": [{
          "value": 932,
          "label": {
            "text": "Theoretical mean: 932",
            "align": "center"
          }
        }]
      }
    }'
      >
        <vaadin-chart-series
          title="Observations"
          values="[
      [760, 801, 848, 895, 965],
      [733, 853, 939, 980, 1080],
      [714, 762, 817, 870, 918],
      [724, 802, 806, 871, 950],
      [834, 836, 864, 882, 910]
    ]"
          additional-options='{
      "tooltip": {
        "headerFormat": "<em>Experiment No {point.key}</em><br/>"
      }
    }'
        >
        </vaadin-chart-series>
        <vaadin-chart-series
          type="scatter"
          title="Outlier"
          values="[[0, 644], [4, 718], [4, 951], [4, 969]]"
          additional-options='{
      "tooltip": {
        "pointFormat": "Observation: {point.y}"
      }
    }'
        >
        </vaadin-chart-series>
      </vaadin-chart>`;
  }
}

window.customElements.define("boxplot-chart", BoxPlotChart);
