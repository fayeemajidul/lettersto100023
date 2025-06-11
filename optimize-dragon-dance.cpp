#include <iostream>
#include <vector>
#include <algorithm>

// Optimized the Dragon Dance routine for better performance
void dragonDance(std::vector<int>& dragons) {
    std::sort(dragons.begin(), dragons.end());
    for (int i = 0; i < dragons.size(); ++i) {
        std::cout << "Dragon " << dragons[i] << " is dancing gracefully!" << std::endl;
    }
    std::cout << "All dragons are now synchronized! Fire hazards minimized!" << std::endl;
}