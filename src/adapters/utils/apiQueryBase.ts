/*** Vendors ***/
import md5 from "md5";

function getApiQueryParamsBase() {
  try {
    if (
      !import.meta.env.VITE_API_PRIVATE_KEY ||
      !import.meta.env.VITE_API_PUBLIC_KEY
    ) {
      throw new Error("API keys not found");
    }
    const ts = new Date().getTime();
    const hash = md5(
      ts +
        import.meta.env.VITE_API_PRIVATE_KEY +
        import.meta.env.VITE_API_PUBLIC_KEY
    );
    const queryParamsBase = `ts=${ts}&apikey=${
      import.meta.env.VITE_API_PUBLIC_KEY
    }&hash=${hash}`;

    return queryParamsBase;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
}

export default getApiQueryParamsBase;
