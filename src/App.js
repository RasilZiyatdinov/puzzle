import React from "react";
import Tree from "react-d3-tree";
//import data from "./data/data.json";
import { useCenteredTree } from "./helpers.js";
import "./styles.css";
import Mains from "./main"

const containerStyles = {
  width: "100vw",
  height: "100vh"
};

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps
}) => (
  <g>
    <circle fill="black" stroke="black" r={15}></circle>
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps}>
      <div style={{ border: "1px solid black", backgroundColor: nodeDatum.isPath ? "green" : "grey" }}>
        <h3 style={{ textAlign: "center" }}>{nodeDatum.name1}<br></br>{nodeDatum.name2}<br></br>{nodeDatum.name3}</h3>
        {nodeDatum.children && (
          <button style={{ width: "100%" }} onClick={toggleNode}>
            {nodeDatum.__rd3t.collapsed ? "Развернуть" : "Свернуть"}
          </button>
        )}
      </div>
    </foreignObject>
  </g>
);

export default function App() {
  const [translate, containerRef] = useCenteredTree();
  
  const nodeSize = { x: 100, y: 150 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -50 };
  return (
    <div style={containerStyles} ref={containerRef}>
      <Tree
        data={JSON.parse(Mains())}
        //data={data}
        translate={translate}
        nodeSize={nodeSize}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
        }
        orientation="vertical"
      />
    </div>
  );
}

