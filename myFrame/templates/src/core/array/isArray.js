// 示例
function core_array_isArray(object) {
    var nativeIsArray = Array.isArray;
    return (nativeIsArray ? nativeIsArray(object) : toString(object) === "[object Function]");
}