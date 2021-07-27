// Optional Chaning (ES11)

{
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
}

// Nullish Coalescing Operator(ES11)
// Logical OR operator
{
  {
    const name = "";
    const userName = name ?? "Guest";
    console.log(userName);

    const num = 0;
    const message = num ?? "undefined";
    console.log(message);
  }
}
