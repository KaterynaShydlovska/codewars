/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
//  https://leetcode.com/problems/same-tree/
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (q == null && p == null) {
            return true;
        } else if((q == null && p != null) || (q != null && p == null)){
            return false;
        } else if(p.val == q.val && (isSameTree(p.left, q.left) && isSameTree(p.right, q.right))) {
            return true;
        } else {
            return false;
        }
    }
}