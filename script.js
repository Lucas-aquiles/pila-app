class Pila {
    constructor() {
      this.items = []; // Usamos un arreglo para almacenar los elementos de la pila
    }
  
    // Agregar un elemento a la pila
    push(elemento) {
      this.items.push(elemento);
    }
  
    // Remover y retornar el último elemento de la pila
    pop() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.items.pop();
    }
  
    // Retornar el último elemento de la pila sin removerlo
    peek() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.items[this.items.length - 1];
    }
  
    // Verificar si la pila está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Retornar el tamaño de la pila
    size() {
      return this.items.length;
    }
  
    clear() {
        this.items = [];
      }
    }
    
    // Ejemplo de uso de la pila
    const pila = new Pila();
    
    console.log(pila.isEmpty()); // true
    
    pila.push(10);
    pila.push(20);
    pila.push(30);
    
    console.log(pila.peek()); // 30
    console.log(pila.size()); // 3
    
    pila.pop();
    
    console.log(pila.peek()); // 20
    
    console.log(pila.isEmpty()); // false
    
    pila.clear();
    
    console.log(pila.isEmpty()); // true