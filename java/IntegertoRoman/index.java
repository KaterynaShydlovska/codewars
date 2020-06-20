import java.util.HashMap;
import java.util.Map;
class Solution {
    public String intToRoman(int num) {
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "I");
        map.put(5, "V");
        map.put(10, "X");
        map.put(50, "L");
        map.put(100, "C");
        map.put(500, "D");
        map.put(1000, "M");
        // do stuff
        StringBuilder st = new StringBuilder();
        while(num > 0) {
            int curMax = getMax(map, num);
            st.append(map.get(curMax).charAt(0));
            num -= curMax;
        }
        return st.toString();
    }
    
    private int getMax(Map map, int number) {
        int lastMax = 0;
        map.keySet().stream().forEach(k -> {
            if(lastMax == 0) {
                lastMax = k.intValue();
            } else if(k.intValue() < number && k.intValue() > lastMax) {
                lastMax = k;
            }
        });
        return lastMax;
    }
}