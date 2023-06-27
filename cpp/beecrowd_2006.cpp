#include<iostream>

int main(){
    int correct_answer;
    int contestant_answer;
    int x=0;

    std::cin >> correct_answer;

    for(int i=0;i<=4;i++){
        std::cin >> contestant_answer;
        if (contestant_answer == correct_answer){
            x++;
        } 
    }
    std::cout << x << std::endl;
    
    return 0;
}
