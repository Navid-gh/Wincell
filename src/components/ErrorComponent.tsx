type Prop = { error: Error; resetErrorBoundary: () => void };

export default function ErrorComponent({ error }: Prop) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}
