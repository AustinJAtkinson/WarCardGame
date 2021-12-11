let expect = chai.expect;

describe('FindWinner', function(){
    describe('#findWinner', function(){
        it('should return player 2 is greater then player 1', function(){
            const player1 = 1;
            const player2 = 5
            let x = findWinner(player1, player2);
            expect(x).to.equal('player2');
        });
        it('should return player 1 is greater then player 2', function(){
            const player1 = 10;
            const player2 = 5
            let x = findWinner(player1, player2);
            expect(x).to.equal('player1');
        });
        it('should return a tie', function(){
            const player1 = 10;
            const player2 = 10
            let x = findWinner(player1, player2);
            expect(x).to.equal('tie');
        });
    })
})