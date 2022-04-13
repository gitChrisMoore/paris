declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SUPABASE_URL: string;
      REACT_APP_SUPABASE_ANON_KEY: string;
      REACT_APP_SUPABASE_PRODUCTS_TBL: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}