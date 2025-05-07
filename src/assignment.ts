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
    const mergeArray = arrays.reduce((acc, curr) => acc.concat(curr), [] as T[]);
    return mergeArray
  }
  
 
  

  
  









}
