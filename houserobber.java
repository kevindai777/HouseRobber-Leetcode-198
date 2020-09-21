//Java Solution

class Solution {
    public int rob(int[] nums) {
        int prevMax = 0;
        int currMax = 0;
        
        for (int num : nums) {
            int temp = currMax;
            currMax = Math.max(currMax, prevMax + num);
            prevMax = temp;
        }
        
        return currMax;
    }
}