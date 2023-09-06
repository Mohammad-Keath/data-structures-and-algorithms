function sortByYear(movies){
    return movies.sort((a,b)=>b.year-a.year)
}

function sortByTitle(movies) {
    const articlePattern = /^(A|An|The)\s/i;
    return movies.sort((a, b) => {
      const titleA = a.title.replace(articlePattern, "");
      const titleB = b.title.replace(articlePattern, "");
      return titleA.localeCompare(titleB);
    });
}

module.exports={sortByTitle,sortByYear}