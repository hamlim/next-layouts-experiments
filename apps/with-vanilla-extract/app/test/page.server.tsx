import "./styles.css";
import { foo } from "./test.client.css";

export default function Test() {
  return (
    <div className="foo">
      Hello from test page <span className={foo}>(server.tsx)</span>
    </div>
  );
}
