import * as React from "react"
import { Star, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  image: string
  title: string
  price: string
  originalPrice?: string
  rating?: number
  reviewCount?: number
  badge?: string
  badgeVariant?: 'default' | 'secondary' | 'destructive'
  onAddToCart?: () => void
  onClick?: () => void
  className?: string
}

function ProductCard({
  image,
  title,
  price,
  originalPrice,
  rating,
  reviewCount,
  badge,
  badgeVariant = 'default',
  onAddToCart,
  onClick,
  className,
}: ProductCardProps) {
  return (
    <Card
      data-slot="product-card"
      className={cn(
        "overflow-hidden py-0 gap-0",
        onClick && "cursor-pointer hover:shadow-md transition-shadow",
        className
      )}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-square bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {badge && (
          <Badge
            variant={badgeVariant}
            className="absolute top-2 left-2"
          >
            {badge}
          </Badge>
        )}
      </div>

      <CardContent className="p-3">
        {/* Title */}
        <h3 className="font-medium text-foreground line-clamp-2 text-sm">
          {title}
        </h3>

        {/* Rating */}
        {rating !== undefined && (
          <div className="flex items-center gap-1 mt-1">
            <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            {reviewCount !== undefined && (
              <span className="text-xs text-muted-foreground">
                ({reviewCount})
              </span>
            )}
          </div>
        )}

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-foreground">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>

          {onAddToCart && (
            <Button
              size="icon-sm"
              variant="secondary"
              onClick={(e) => {
                e.stopPropagation()
                onAddToCart()
              }}
            >
              <ShoppingCart className="size-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export { ProductCard }
export type { ProductCardProps }
