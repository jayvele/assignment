function PageContent({ title, children }) {
  return (
    <div className="text-center mt-6">
      <h1 className="font-bold text-3xl text-blue-700">{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
