import BusinessLogin from "./api/business_ui/b_login";
import BusinessSignup from "./api/business_ui/b_signup";
import CustomerLogin from "./api/customer_ui/c_login";
import CustomerSignup from "./api/customer_ui/c_signup";


export default function Home() {
  return (
    <div>
      {/* <CustomerLogin/> */}
      {/* <BusinessLogin/> */}
      {/* <CustomerSignup/> */}
      <BusinessSignup/>
    </div>
  )
}
