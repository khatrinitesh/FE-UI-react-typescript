import type { TreeNode } from "../../interface";
import { useTreeStore } from "../../store/treeStore";

const TreeView = () => {
  const treeData = useTreeStore((state) => state.treeData);

  return (
    <div>
      {treeData.map((node: TreeNode) => (
        <TreeNodeComponent key={node.id} node={node} />
      ))}
    </div>
  );
};

export default TreeView;

const TreeNodeComponent: React.FC<{ node: TreeNode }> = ({ node }) => {
  const toggleNode = useTreeStore((state) => state.toggleNode);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={{ marginLeft: 20 }}>
      <div
        style={{
          cursor: hasChildren ? "pointer" : "default",
          userSelect: "none",
        }}
        onClick={() => hasChildren && toggleNode(node.id)}
      >
        {hasChildren && (node.isExpanded ? "▼ " : "▶ ")}
        {node.label}
      </div>
      {hasChildren && node.isExpanded && (
        <div>
          {node.children!.map((child) => (
            <TreeNodeComponent key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};
