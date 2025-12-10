function InputMask() {
  const handleKeyDown = (event) => {
    const inputValue = event.key.toLowerCase();
    const vocales = ["a", "e", "i", "o", "u"];
    if (vocales.includes(inputValue)) {
      event.preventDefault();
      alert("No se permiten vocales!");
    }
  };

  return (
    <>
      <h2>Palabra sin vocales</h2>
      <input type="text" onKeyDown={handleKeyDown} />
    </>
  );
}

export default InputMask;
