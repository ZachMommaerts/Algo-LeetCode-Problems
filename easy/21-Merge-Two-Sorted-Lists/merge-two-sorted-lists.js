function ListNode(val, next){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next)
}

const mergeTwoLists = (list1, list2) => {
    let linkedList = new ListNode();
    let head = linkedList;

    while(list1 && list2) {
        if(list1.val<list2.val){
            linkedList.next = list1;
            list1=list1.next;

        } else {
            linkedList.next = list2;
            list2=list2.next;
        }
        linkedList = linkedList.next
    }
    if(list1){
        linkedList.next=list1;
    }
    if(list2){
        linkedList.next=list2;
    }
    return head.next;
}

console.log(mergeTwoLists([1,2,4], [1,3,4]))