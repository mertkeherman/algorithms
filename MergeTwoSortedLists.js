/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
//time O(n+m);
//space O(1);
var mergeTwoLists = function(list1, list2) {
    //create tempHead for tests to pass
    const tempHead = {next: null};
    let current = tempHead;
    
    //merge lists while both lists are not exhausted yet
    while(list1 && list2){
         //check which val is less
         if(list1.val < list2.val){
             //point curr to less val
             current.next = list1;
            //move curr up one
             current = current.next;
            //move list1 one up
            list1 = list1.next; 
         } else {
             //point curr to less val
             current.next = list2;
            //move curr up one
             current = current.next;
            //move list2 one up
            list2 = list2.next; 
         }
            
    }
    
    current.next = list1 || list2;
    return tempHead.next;
 
    
};
