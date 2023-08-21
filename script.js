
export class Pila {
    constructor() {
      this.items = []; 
      
    }
  
    
    push(elemento) {
      this.items.push(elemento);
    }
  
   
    pop() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
        this.items = [];
      }
    }
    
    