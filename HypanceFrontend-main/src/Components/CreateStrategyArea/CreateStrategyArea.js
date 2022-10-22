import React, { useState } from "react";
import SummaryBox from "../SummaryBox/SummaryBox";
import * as BS from "react-bootstrap";
import axios from "axios";

function CreateStrategyArea() {
  const [signals, setSignals] = useState({
    name: "",
    period: "",
    indicatorId: "",
    signalResult: "",
    interval: "",
    strategyTrend: "",
  });
  const [form, setForm] = useState({
    name: "",
    description: "",
    signals: [signals],
  });

  const postCreateStrategy = (e) => {
    e.preventDefault();
    var config = {
      method: "post",
      url: "http://localhost:31377/Strategy/Post",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*"
      },
      data: JSON.stringify({form}),
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <BS.Row className="row">
        <BS.Col sm="9" md="10">
          <h2>CreateStrategyArea</h2>
          <BS.Row>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Strategy Name</BS.Form.Label>
                <BS.Form.Control
                  type="text"
                  value={form.name}
                  placeholder="Enter Strategy Name"
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                  }}
                />
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Strategy Description</BS.Form.Label>
                <BS.Form.Control
                  type="text"
                  value={form.description}
                  placeholder="Enter Strategy Description"
                  onChange={(e) => {
                    setForm({ ...form, description: e.target.value });
                  }}
                />
              </BS.Form.Group>
            </BS.Col>
          </BS.Row>

          <h2>Signal Options</h2>
          <BS.Row>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Signal Name</BS.Form.Label>
                <BS.Form.Control
                  type="text"
                  value={signals.name}
                  placeholder="Enter Signal Name"
                  onChange={(e) => {
                    setSignals({ ...signals, name: e.target.value });
                  }}
                />
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Period</BS.Form.Label>
                <BS.Form.Control
                  type="number"
                  value={signals.period}
                  placeholder="Enter Period"
                  onChange={(e) => {
                    setSignals({ ...signals, period: e.target.value });
                  }}
                />
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Indicator</BS.Form.Label>
                <BS.Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setSignals({ ...signals, indicatorId: e.target.value });
                  }}
                >
                  <option value="RSI">RSI</option>
                  <option value="MACD">MACD</option>
                  <option value="EMA">EMA</option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Setting</BS.Form.Label>
                <BS.Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setSignals({ ...signals, signalResult: e.target.value });
                  }}
                >
                  <option value="1">Above</option>
                  <option value="2">Below</option>
                  <option value="3">Crosses Over</option>
                  <option value="4">Crosses Under</option>
                  <option value="5">Equal</option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Interval</BS.Form.Label>
                <BS.Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setSignals({ ...signals, interval: e.target.value });
                  }}
                >
                  <option value="0">1d</option>
                  <option value="1">3d</option>
                  <option value="2">5d</option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Strategy Trend</BS.Form.Label>
                <BS.Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setSignals({ ...signals, strategyTrend: e.target.value });
                  }}
                >
                  <option value="BUY">BUY</option>
                  <option value="SELL">SELL</option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            {/* <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Strategy Trend</BS.Form.Label>
                <BS.Form.Select aria-label="Default select example" multiple>
                  <option>Open this select menu</option>
                  <option value="BUY">BUY</option>
                  <option value="SELL">SELL</option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col> */}
          </BS.Row>
          <BS.Button onClick={postCreateStrategy}>Create Strategy</BS.Button>
        </BS.Col>
        <BS.Col sm="3" md="2">
          <SummaryBox />
        </BS.Col>
      </BS.Row>
    </div>
  );
}

export default CreateStrategyArea;
