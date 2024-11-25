### Singleton Design Pattern

**Definition:**  
Singleton is a **creational design pattern**, which ensures:  
- Only **one object** of its kind exists.  
- Provides a **single point of access** to it for any other code.  

---

**Key Characteristics:**  
- Similar **pros and cons** as global variables.  
- While **super-handy**, they tend to **break modularity** in your code.  

---

**Limitations:**  
- A class that depends on a Singleton cannot be easily reused in another context without also **carrying over the Singleton**.  
- This issue often arises during the **creation of unit tests**.