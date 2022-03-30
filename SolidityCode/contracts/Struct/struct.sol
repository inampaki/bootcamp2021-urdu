//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Struct {
    enum FundingRounds {
        SEED,
        PRIVATE,
        PUBLIC
    }

    struct FundingRoundDetails{
        uint256 funding;
        FundingRounds round;
        }
    FundingRoundDetails[] public allRounds;
    
    function addFundingR()public {
        FundingRoundDetails memory details1 = FundingRoundDetails(1000,FundingRounds.SEED);
        FundingRoundDetails memory details2 = FundingRoundDetails(2000,FundingRounds.SEED);
        FundingRoundDetails memory details3 = FundingRoundDetails(3000,FundingRounds.SEED);
        allRounds.push(details1);
        allRounds.push(details2);
        allRounds.push(details3);
    }

    function getFundingR(uint256 _round) public view returns (uint256) {
        return allRounds[_round].funding;
    }


    //struct inside mapping
    mapping(uint256 => FundingRoundDetails) private fundingRounds;
    uint256 public roundCounter;
    mapping(address => FundingRoundDetails) private userRounds;

    function addRound(uint256 _amount, uint256 _round)public {
        roundCounter++;
        fundingRounds[roundCounter] = FundingRoundDetails(_amount, FundingRounds(_round));

        userRounds[msg.sender] = FundingRoundDetails(_amount, FundingRounds(_round));
    }
    function getFunding(uint _roundNumber) public view returns(uint256) {
        return fundingRounds[_roundNumber].funding;
    }
    function getMyRoundInfo(uint256 _round) public view returns(FundingRoundDetails memory  ){
        return fundingRounds[_round];
    }
    function senderRoundInfo()public view returns(FundingRoundDetails memory) {
        return userRounds[msg.sender];
    }


    //now combination of stuck, mapping
    //first mapping inside struct
    struct UserInfo {
        string name;
        uint256 age;
        mapping(address => uint256) fundingReceived;
    }

    mapping(address =>UserInfo) public users;
    function addUser() public  {
        // UserInfo memory _user = UserInfo("Zia KHan, 30)
        UserInfo storage _user = users[msg.sender];

        _user.name = "Tariq";
        _user.age = 32;
    }
    
    function provideFunding(uint256 _amount,address _user)public returns(uint256) {
        UserInfo storage _userInfo = users[_user];
        _userInfo.fundingReceived[msg.sender] = _amount;
        _userInfo.fundingReceived[msg.sender] = 2;
        return _userInfo.fundingReceived[msg.sender];
    }

    //mapping inside mapping
    // enum RollInSchool{
    //     STUDENT,
    //     TEACHER
    // }
    // mapping(uint=> mapping(string=>RollInSchool)) roll;

    // function addRoll(uint _index, string memory _name, RollInSchool _roll)public {
    //     roll[_index][_name]= _roll;

    // }
    

    
}