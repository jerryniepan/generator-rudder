/* 通过import的方式引入其他文件 */
! function() {
    //import core/array/isArray

    // 示例
    var arr = [];
    var isArray = core_array_isArray(arr);
    console.log('isArray:', isArray)

}(window);