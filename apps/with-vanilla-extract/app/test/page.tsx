import "./styles.css";
// Breaks!
// TypeError: Cannot read properties of undefined (reading 'chunks')
import { foo } from "./test.client.css";

export default function Test() {
  return (
    <div className="foo">
      Hello from test page <span className={foo}>(server component)</span>
    </div>
  );
}
