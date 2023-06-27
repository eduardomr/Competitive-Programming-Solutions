#include<iostream>

int calculateFirstLink(int third_link) {
int first_link;

first_link = (4 * third_link);

return first_link;
}

int main(){

    int third_link;
    std::cin >> third_link;
    std::cout << calculateFirstLink(third_link) << std::endl;


    return 0;
}