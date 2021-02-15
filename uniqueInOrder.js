var uniqueInOrder=function(iterable){
  if(typeof(iterable) == 'string') iterable = iterable.split('');
  return iterable.filter((item, index) => (item != iterable[index-1]))
}

// console.log(uniqueInOrder('AABBCCA'))
// console.log(uniqueInOrder(['A', 'b', 'b', 'C']))

/*Others' Solutions:






var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

From what I understand, when we use function.call(this, args), we set a different context for the filter function. In this case, we call .filter on the 'iterable', and pass in the filter callback.

Normally we use filter like: [1,2,3].filter((item) => item); where the 'this' argument is [1,2,3].

By using .call, the 'this' argument is now the 'iterable'.

Using the Array literal means we can have access to the filter method: [].filter. We then use call to apply it to 'iterable': [].filter.call(iterable, callback).

So the filter method is run on iterable with the callback taking 2 arguments: (a, i) with 'a' being the item and 'i' being the index.

Filter returns a new array, filled with values that resolve to true. So if the previous item in the array: iterable[i - 1] does not equal the current item: !== a we push it into the new array, because it means that the last item and the current item are not the same values.

Lastly, by using .call there is an added bonus of being able to use Array methods on strings!




var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

[iterable] is an array containing iterable.
[...iterable] is an array containing all the elements of iterable spread out.
So if iterable = [1, 2, 3], then [iterable] would be [[1, 2, 3]], and [...iterable] would be [1, 2, 3].
But in this case, iterable = 'some string', so spreading out the elements gives you ['s', 'o', 'm', ...] so you can work with it in filter.

But also, sometimes, the iterable is just an array. In that case, it still doesn't hurt to copy the array into a new one.

*/