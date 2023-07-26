// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract Election {
    struct Voter {
        bool registered;
        bool voted; 
        uint256 vote; 
    }
    struct Candidate {
        string name; 
        uint256 score; 
    }

    address public leader;
    mapping(address => Voter) public voters;

    Candidate[] public candidates;
    constructor(string[] memory _candidateNames) {
        leader = msg.sender;
        voters[leader].registered = true;
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            candidates.push(Candidate({name: _candidateNames[i], score: 0}));
        }
    }

    function registerVoter(address voter) external {
        require(!voters[voter].voted, "The voter already voted.");
        require(!voters[voter].registered, "Voter is already registered.");
        voters[voter].registered=true;
    }

    function castVote(uint256 _candidate1, uint256 _candidate2, uint256 _candidate3) external {
        Voter storage voter = voters[msg.sender];
        require(voter.registered, "Voter is not registered.");
        require(!voter.voted, "Already voted.");
        candidates[_candidate1].score+=5;
        candidates[_candidate2].score+=3;
        candidates[_candidate3].score+=1;
        voter.voted=true;
    }

    function currentStanding() public view returns (Candidate[] memory _candidates) {
        return candidates;
    }   

}
