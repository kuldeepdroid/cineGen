import { ClerkProvider } from "@clerk/nextjs";

const Provider = ({ children }: any) => {
  return (
    <ClerkProvider
      appearance={{
        cssLayerName: "clerk",
      }}
    >
      {children}
    </ClerkProvider>
  );
};

export default Provider;
