import chai,{expect} from 'chai';
import chaihttp from 'chai-http'
import app from '../index'

chai.use(chaihttp);

describe('AnnounceIT test container',()=>{
    describe('POST /api/v1/auth/signup',()=>{
        it('should return 201 status if all signup field required filled correctly',(done)=>{
            chai
            .request(app)
            .post('/api/v1/auth/signup')
            .send({first_name: 'gilbert',last_name:'elnino',email: 'gilbert@gmail.com',password: '123456'})
            .end((err,res)=>{
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('message','User created successfully');
                done();
            });

        });
    describe('POST /api/v1/auth/signin',()=>{
        it('should return 200 status if user successfully logged in ',(done)=>{
            chai
            .request(app)
            .post('/api/v1/auth/signin')
            .send({email: 'gilbert@gmail.com',password: '123456'})
            .end((err,res)=>{
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message','User is successfully logged in');
                done();
            });

        });
    }) 
    });
});
