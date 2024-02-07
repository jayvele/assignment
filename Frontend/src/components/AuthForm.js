import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";

function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="flex justify-center">
      <Form
        method="post"
        className="w-96 m-8 border-2 border-blue-700 rounded-md"
      >
        <h1 className="font-medium text-xl my-12 mx-6">
          {isLogin ? "Log in" : "Create a new user"}
        </h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p className="flex justify-between mx-6 my-4">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="border border-blue-500 rounded-md"
          />
        </p>
        <p className="flex justify-between mx-6 my-4">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            className="border border-blue-500 rounded-md"
          />
        </p>
        <div className="flex gap-4 justify-center my-4">
          <Link
            to={`?mode=${isLogin ? "signup" : "login"}`}
            className="text-white font-display font-semibold bg-blue-700 text-xs border border-tertiaryBlue-600 rounded-xl px-2.5 py-1.5 mr-6 cursor-pointer"
          >
            {isLogin ? "Create new user" : "Go to login"}
          </Link>
          <button
            disabled={isSubmitting}
            className="text-white font-display font-semibold bg-blue-700 text-xs border border-tertiaryBlue-600 rounded-xl px-2.5 py-1.5 mr-6 cursor-pointer"
          >
            {isLogin ? "Login" : isSubmitting ? "Submitting..." : " Save "}
            {/* {isSubmitting ? "Submitting..." : "Save"} */}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AuthForm;
