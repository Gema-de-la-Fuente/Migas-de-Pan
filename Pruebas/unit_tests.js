/*Los casos de prueba */


describe("the behavior of the code in the examples", function(){

  it("prueba 1", function(){
      expect(generateBC("AEIOU.com", " : ")).toEqual('<span class="active">HOME</span>');      
  });
  it("prueba 2", function(){
      expect(generateBC("aeiou/index.php", " = ")).toEqual('<span class="active">HOME</span>');
  });
  it("prueba 3", function(){
      expect(generateBC("index.html/Holatodos/hola", " [ ")).toEqual('<a href="/">HOME</a> [ <a href="/Holatodos/">HOLATODOS</a> [ <span class="active">HOLA</span>');
  });
  it("prueba 4", function(){
      expect(generateBC("index.html/Hola/Dola.html", " * ")).toEqual('<a href="/">HOME</a> * <a href="/Hola/">HOLA</a> * <span class="active">DOLA</span>');
  });
  it("prueba 5", function(){
      expect(generateBC("Dola/Hola/index.html", " , ")).toEqual('<a href="/">HOME</a> , <span class="active">HOLA</span>');
  });
  it("prueba 6", function(){
      expect(generateBC("www.Dola.com/Hola/index.php", " / ")).toEqual('<a href="/">HOME</a> / <span class="active">HOLA</span>');
  });
  it("prueba 7", function(){
      expect(generateBC("index.html/Hola-and-todos/hola.php", " * ")).toEqual('<a href="/">HOME</a> * <a href="/Hola-and-todos/">HOLA AND TODOS</a> * <span class="active">HOLA</span>');
  });
  it("prueba 8", function(){
      expect(generateBC("index.html/Hola-dola-hola-hola-hola/tengo-mas-de-treinta-palabras-ahora-si/ahora", " % ")).toEqual('<a href="/">HOME</a> % <a href="/Hola-dola-hola-hola-hola/">HOLA DOLA HOLA HOLA HOLA</a> % <a href="/Hola-dola-hola-hola-hola/tengo-mas-de-treinta-palabras-ahora-si/">TMDTPAS</a> % <span class="active">AHORA</span>');
  });
  it("prueba 9", function(){
      expect(generateBC("http://index.html/Hola-and-todos/hola/doki.html", " { ")).toEqual('<a href="/">HOME</a> { <a href="/Hola-and-todos/">HOLA AND TODOS</a> { <a href="/Hola-and-todos/hola/">HOLA</a> { <span class="active">DOKI</span>');
  });
  it("prueba 10", function(){
      expect(generateBC("index.com/Hola-and-todos-and-todos-and-todos-treinta/hola/doki.html", " { ")).toEqual('<a href="/">HOME</a> { <a href="/Hola-and-todos-and-todos-and-todos-treinta/">HTTTT</a> { <a href="/Hola-and-todos-and-todos-and-todos-treinta/hola/">HOLA</a> { <span class="active">DOKI</span>');
  });

});
