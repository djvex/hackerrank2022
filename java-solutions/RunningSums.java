class RunningSums {
    public int[] runningSum(int[] nums) {
        int[] sums =new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            int runningSum = 0;
            for (int j = 0; j <i+1; j++) {
                runningSum+=nums[j];
            }
            sums[i] = runningSum;
        }
        return sums;
    }
}