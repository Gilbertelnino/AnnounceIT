import chai,{expect} from 'chai';
import chaihttp from 'chai-http'
import app from '../index'

chai.use(chaihttp);

describe('AnnounceIT test container',()=>{
    describe('GET /',()=>{
        it('should return welcome message',(done)=>{
            chai
            .request(app)
            .get('/')
            .end((err,res)=>{
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message','Welcome gilbert this is your first test for api');
                done();
            })

        })
    })
});
