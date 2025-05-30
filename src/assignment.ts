{
  function formatString(input: string, toUpper: boolean = true): string {
    if (toUpper) {
      return input.toUpperCase();
    } else {
      return input.toLocaleLowerCase();
    }
  }

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    {
      const higherRating = items.filter((item) => item.rating >= 4);
      return higherRating;
    }
  }

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const mergeArray = arrays.reduce(
      (merged, currentArray) => merged.concat(currentArray),
      [] as T[]
    );
    return mergeArray;
  }

  class Vehicle {
    constructor(private make: string, private year: number) {}
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
      super(make, year);
    }

    getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }

    return products.reduce((maxProduct, currentProduct) =>
      currentProduct.price > maxProduct.price ? currentProduct : maxProduct
    );
  }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }

  
}
