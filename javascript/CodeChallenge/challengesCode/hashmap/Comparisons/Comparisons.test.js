const { TestScheduler } = require('jest')
const {sortByTitle,sortByYear}= require('./Comparisons')

describe('comparisons tests',()=>{
    test('test sort by Year',()=>{
        let movies = [
            {'title':'A cello sfd as',year:2010,genres:['drama','horror']},
            {'title':'An fello dsfgds ',year:2009,genres:['drama','horror']},
            {'title':'bellof  dfe',year:2012,genres:['drama','horror']},
            {'title':'aello sd ',year:2023,genres:['drama','horror']},
            {'title':'kgllo agg',year:2019,genres:['drama','horror']},
             ]
        expect(sortByYear(movies)).toEqual([
            {"genres": ["drama", "horror"], "title": "aello sd ", "year": 2023},
             {"genres": ["drama", "horror"], "title": "kgllo agg", "year": 2019},
              {"genres": ["drama", "horror"], "title": "bellof  dfe", "year": 2012},
               {"genres": ["drama", "horror"], "title": "A cello sfd as", "year": 2010},
                {"genres": ["drama", "horror"], "title": "An fello dsfgds ", "year": 2009}])
    })
    test('test sort by Tilte',()=>{
        let movies = [
            {'title':'A cello sfd as',year:2010,genres:['drama','horror']},
            {'title':'An fello dsfgds ',year:2009,genres:['drama','horror']},
            {'title':'bellof  dfe',year:2012,genres:['drama','horror']},
            {'title':'aello sd ',year:2023,genres:['drama','horror']},
            {'title':'kgllo agg',year:2019,genres:['drama','horror']},
             ]
        expect(sortByTitle(movies)).toEqual([
            {"genres": ["drama", "horror"], "title": "aello sd ", "year": 2023},
            {"genres": ["drama", "horror"], "title": "bellof  dfe", "year": 2012},
            {"genres": ["drama", "horror"], "title": "A cello sfd as", "year": 2010},
            {"genres": ["drama", "horror"], "title": "An fello dsfgds ", "year": 2009},
            {"genres": ["drama", "horror"], "title": "kgllo agg", "year": 2019}])
    })
})