/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//O(n)
//O(1)
var hasCycle = function(head) {
    //use two vars for slow and fast
    let slow = head;
    let fast = head;
    
    //while fast and fast.next are valid
    while(fast && fast.next){
        //set the vars to next
        slow = slow.next;
        fast = fast.next.next;
        
        //check if slow and fast are equal
        if(slow === fast) return true;
    }
    
    return false;
        
};
