/** 
Created : 2023 

Script : Merge k sorted lists

Description : write an algorithm to merge k sorted lists

    For the given array of k linked-lists lists, each linked-list is sorted in ascending order.
    Merge all the linked-lists into one sorted linked-list and return it. 
**/

// class ListNode
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function mergeLists(a, b) {
  const dummy = new ListNode(0);
  let temp = dummy;
  while (a !== null && b !== null) {
    if (a.val < b.val) {
      temp.next = a;
      a = a.next;
    } else {
      temp.next = b;
      b = b.next;
    }
    temp = temp.next;
  }
  if (a !== null) {
    temp.next = a;
  }
  if (b !== null) {
    temp.next = b;
  }
  return dummy.next;
}

let mergeKLists = function (lists) {
  console.log(lists);
  if (lists.length === 0) {
    return null;
  }
  while (lists.length > 1) {
    let a = lists.shift(); //removes the first item in the array
    let b = lists.shift();
    const h = mergeLists(a, b);
    lists.push(h);
  }
  return lists[0];
};

// Example usage:
// create Linked List
const list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(5);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

const list3 = new ListNode(2);
list3.next = new ListNode(6);

const merged = mergeKLists([list1, list2, list3]);
console.log(merged);

// BIG O Notation
// Time complexity -  O(n log k)
// Space complexity - O(log k)
