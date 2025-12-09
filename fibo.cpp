#include <iostream>
#include <bits/stdc++.h>

using namespace std;
void fib(int n)
{
    cout<<"1"<<endl;
    for(int i=2;i<=n;i++)
    {
        int a=0,b=1,c;
        for(int j=2;j<=i;j++)
        {
            c=a+b;
            a=b;
            b=c;
        }
        cout<<c<<endl;
    }
}
int main()
{
    int n;
    cin>>n;
    fib(n);
    return 0;
}